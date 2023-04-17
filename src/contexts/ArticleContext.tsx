import { ReactNode, createContext, useCallback, useState } from 'react'
import { api } from '../lib/axios'

interface Article {
  id: number
  issueNumber: number
  title: string
  body: string
  url: string
  githubLink: string
  commentCount: number
  createdAt: Date
  updatedAt: Date
}

interface Profile {
  id: number
  handle: string
  avatarUrl: string
  bio: string
  name: string
  company: string
  profileUrl: string
  followers: number
}

interface ArticleContextType {
  articleCount: number
  profile: Profile
  articles: Article[]
  activeArticle: Article
  fetchArticles: (query?: string) => Promise<void>
  fetchProfile: () => Promise<void>
  selectActiveArticle: (id: number) => void
}

export const ArticleContext = createContext({} as ArticleContextType)

interface ArticleContextProps {
  children: ReactNode
}

export function ArticleContextProvider({ children }: ArticleContextProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [articleCount, setArticleCount] = useState(0)
  const [profile, setProfile] = useState({} as Profile)
  const [activeArticle, setActiveArticle] = useState({} as Article)

  const fetchArticles = useCallback(async (query?: string) => {
    console.log('getting articles')
    const q = query
      ? encodeURI(query + ' repo:fernandofreamunde/challenge-github-blog')
      : 'repo:fernandofreamunde/challenge-github-blog'

    const response = await api.get('search/issues', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q,
      },
    })

    const articles = response.data.items.map((item: any) => {
      return {
        id: item.id,
        issueNumber: item.number,
        title: item.title,
        body: item.body,
        url: item.url,
        githubLink: item.html_url,
        commentCount: item.comments,
        createdAt: new Date(item.created_at),
        updatedAt: new Date(item.updated_at),
      }
    })

    setArticleCount(response.data.total_count)
    setArticles(articles)
  }, [])

  const fetchProfile = useCallback(async () => {
    console.log('fetching profile')
    const response: any = await api.get('users/fernandofreamunde')

    const p = {
      id: response.data.id,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      name: response.data.name,
      company: response.data.company,
      profileUrl: response.data.html_url,
      followers: response.data.followers,
      handle: response.data.login,
    }

    setProfile(p)
  }, [setProfile])

  const selectActiveArticle = useCallback(
    async (id: number) => {
      console.log('setting article')

      const active = articles.find((article) => article.issueNumber === id)

      if (!active) {
        const response = await api.get(
          'repos/fernandofreamunde/challenge-github-blog/issues/' + id,
        )

        setActiveArticle({
          id: response.data.id,
          issueNumber: response.data.number,
          title: response.data.title,
          body: response.data.body,
          url: response.data.url,
          githubLink: response.data.html_url,
          commentCount: response.data.comments,
          createdAt: new Date(response.data.created_at),
          updatedAt: new Date(response.data.updated_at),
        })
        fetchProfile()
        return
      }

      setActiveArticle(active)
    },
    [setActiveArticle, articles, fetchProfile],
  )

  return (
    <ArticleContext.Provider
      value={{
        profile,
        articleCount,
        articles,
        fetchArticles,
        fetchProfile,
        activeArticle,
        selectActiveArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}
