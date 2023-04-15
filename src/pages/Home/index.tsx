import { Header } from '../../components/Header'
import { ProfileCard } from './components/ProfileCard'
import {
  MainContainer,
  PostCard,
  PostContainer,
  SearchAndPubData,
} from './styles'

export function Home() {
  return (
    <>
      <Header />
      <ProfileCard />

      <MainContainer>
        <SearchAndPubData>
          <div>
            <h3>Publications</h3>
            <span>6 publications</span>
          </div>

          <form>
            <input placeholder="Search content" />
          </form>
        </SearchAndPubData>

        <PostContainer>
          <PostCard>
            <span>
              <h2>TypeScript data types and things</h2>
              <div>1d ago</div>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              odio.
            </p>
          </PostCard>
          <PostCard>
            <span>
              <h2>TypeScript data types and things</h2>
              <div>1d ago</div>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              odio.
            </p>
          </PostCard>
          <PostCard>
            <span>
              <h2>TypeScript data types and things</h2>
              <div>1d ago</div>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              odio.
            </p>
          </PostCard>
          <PostCard>
            <span>
              <h2>TypeScript data types and things</h2>
              <div>1d ago</div>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              odio.
            </p>
          </PostCard>
          <PostCard>
            <span>
              <h2>TypeScript data types and things</h2>
              <div>1d ago</div>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              odio.
            </p>
          </PostCard>
          <PostCard>
            <span>
              <h2>TypeScript data types and things</h2>
              <div>1d ago</div>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni a
              commodi nesciunt, quibusdam veritatis ipsa sed, optio maiores
              odio.
            </p>
          </PostCard>
        </PostContainer>
      </MainContainer>
    </>
  )
}
