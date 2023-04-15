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

export function TitleCard() {
  return (
    <TitleCardContainer>
      <ProfileInfo>
        <ProfileInfoHeader>
          <a href="https://github.com">
            <FontAwesomeIcon icon={faChevronLeft} /> go back
          </a>
          <a href="https://github.com">
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileInfoHeader>

        <h1>JavaScript data types and data structures</h1>

        <ProfileInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} /> gh-profile
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} /> 1 day ago
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} /> 21 comments
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>
    </TitleCardContainer>
  )
}
