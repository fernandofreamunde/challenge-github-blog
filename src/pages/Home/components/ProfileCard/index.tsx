import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import {
  ProfileCardContainer,
  ProfileInfo,
  ProfileInfoFooter,
  ProfileInfoHeader,
  ProfilePicture,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext, useEffect } from 'react'
import { ArticleContext } from '../../../../contexts/ArticleContext'

export function ProfileCard() {
  const { profile, fetchProfile } = useContext(ArticleContext)

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <ProfileCardContainer>
      <ProfilePicture src={profile.avatarUrl} alt="" />
      <ProfileInfo>
        <ProfileInfoHeader>
          <h1>{profile.name}</h1>
          <a href={profile.profileUrl}>
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileInfoHeader>

        <p>{profile.bio}</p>

        <ProfileInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {profile.handle}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> {profile.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} /> {profile.followers}
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}
