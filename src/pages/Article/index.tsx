import { useParams } from 'react-router-dom'
import { TitleCard } from './components/TitleCard'
import { ArticleContent } from './styles'
import { useContext, useEffect } from 'react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { dateFormatter } from '../../utils/formatter'
import ReactMarkdown from 'react-markdown'

export function Article() {
  const { id } = useParams()
  const { profile, activeArticle, selectActiveArticle } =
    useContext(ArticleContext)

  useEffect(() => {
    if (id) {
      selectActiveArticle(Number(id))
    }
  }, [selectActiveArticle, id])

  return (
    <>
      <TitleCard
        title={activeArticle.title}
        authorHandle={profile.handle}
        commentCount={activeArticle.commentCount}
        createdAtTimestamp={dateFormatter.format(activeArticle.createdAt)}
        githubLink={activeArticle.githubLink}
      />

      <ArticleContent>
        <ReactMarkdown>{activeArticle.body}</ReactMarkdown>
      </ArticleContent>
    </>
  )
}
