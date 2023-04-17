import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  TitleCardContainer,
  ProfileInfo,
  ProfileInfoFooter,
  ProfileInfoHeader,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

interface TitleCardProps {
  title: string
  authorHandle: string
  githubLink: string
  commentCount: number
  createdAtTimestamp: string
}

export function TitleCard({
  title,
  authorHandle,
  githubLink,
  commentCount,
  createdAtTimestamp,
}: TitleCardProps) {
  return (
    <TitleCardContainer>
      <ProfileInfo>
        <ProfileInfoHeader>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} /> go back
          </Link>
          <a href={githubLink}>
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileInfoHeader>

        <h1>{title}</h1>

        <ProfileInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {authorHandle}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} /> {createdAtTimestamp}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} /> {commentCount} comments
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>
    </TitleCardContainer>
  )
}
