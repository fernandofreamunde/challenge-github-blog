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

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfilePicture
        src="https://ui-avatars.com/api/?size=1000&name=Marcus+Aurelius"
        alt=""
      />
      <ProfileInfo>
        <ProfileInfoHeader>
          <h1>Marcus Aurelius</h1>
          <a href="https://github.com">
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileInfoHeader>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileInfoFooter>
          <span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> gh-profile
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> Magma Studio
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} /> 21
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}
