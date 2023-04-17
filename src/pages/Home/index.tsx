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
import { Link } from 'react-router-dom'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Home() {
  const { articles, fetchArticles } = useContext(ArticleContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchArticles(data: SearchFormInput) {
    await fetchArticles(data.query)
  }

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

          <form onSubmit={handleSubmit(handleSearchArticles)}>
            <input
              type="text"
              placeholder="Search content"
              {...register('query')}
            />
          </form>
        </SearchAndPubData>

        <PostContainer>
          {articles.map((article) => {
            return (
              <Link key={article.id} to={'article/' + article.issueNumber}>
                <PostCard>
                  <span>
                    <h2>{article.title}</h2>
                    <div>{countDateToNow(article.createdAt)}</div>
                  </span>
                  <p>{article.body.substring(0, 230) + '...'}</p>
                </PostCard>
              </Link>
            )
          })}
        </PostContainer>
      </MainContainer>
    </>
  )
}
