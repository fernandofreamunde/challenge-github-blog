import { useContext, useEffect } from 'react'
import { ProfileCard } from './components/ProfileCard'
import {
  MainContainer,
  PostCard,
  PostContainer,
  SearchAndPubData,
} from './styles'
import { ArticleContext } from '../../contexts/ArticleContext'
import { countDateToNow } from '../../utils/formatter'

export function Home() {
  const { articles, fetchArticles } = useContext(ArticleContext)

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return (
    <>
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
          {articles.map((article) => {
            return (
              <PostCard key={article.id}>
                <span>
                  <h2>{article.title}</h2>
                  <div>{countDateToNow(article.createdAt)}</div>
                </span>
                <p>{article.body.substring(0, 230) + '...'}</p>
              </PostCard>
            )
          })}
        </PostContainer>
      </MainContainer>
    </>
  )
}
