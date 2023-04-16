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

interface ArticleContextType {
  articleCount: number
  articles: Article[]
  fetchArticles: (query?: string) => Promise<void>
}

export const ArticleContext = createContext({} as ArticleContextType)

interface ArticleContextProps {
  children: ReactNode
}

export function ArticleContextProvider({ children }: ArticleContextProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [articleCount, setArticleCount] = useState(0)

  const fetchArticles = useCallback(async (query?: string) => {
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

    console.log(response.data)
    const articles = response.data.items.map((item: any) => {
      return {
        id: item.id,
        issueNumber: item.mumber,
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

  return (
    <ArticleContext.Provider value={{ articleCount, articles, fetchArticles }}>
      {children}
    </ArticleContext.Provider>
  )
}

// const R = {
//   incomplete_results: false,
//   items: [
//     {
//       url: 'https://api.github.com/repos/fernandofreamunde/challenge-github-blog/issues/6',
//       comments_url:
//         'https://api.github.com/repos/fernandofreamunde/challenge-github-blog/issues/6/comments',
//       html_url:
//         'https://github.com/fernandofreamunde/challenge-github-blog/issues/6',
//       id: 1669734216,
//       node_id: 'I_kwDOJW3TJM5jhh9I',
//       number: 6,
//       title: 'Starting with Symfony the best PHP Framework',
//       user: {
//         login: 'fernandofreamunde',
//         id: 3598030,
//         node_id: 'MDQ6VXNlcjM1OTgwMzA=',
//         avatar_url: 'https://avatars.githubusercontent.com/u/3598030?v=4',
//         gravatar_id: '',
//         url: 'https://api.github.com/users/fernandofreamunde',
//         html_url: 'https://github.com/fernandofreamunde',
//         followers_url:
//           'https://api.github.com/users/fernandofreamunde/followers',
//         following_url:
//           'https://api.github.com/users/fernandofreamunde/following{/other_user}',
//         gists_url:
//           'https://api.github.com/users/fernandofreamunde/gists{/gist_id}',
//         starred_url:
//           'https://api.github.com/users/fernandofreamunde/starred{/owner}{/repo}',
//         subscriptions_url:
//           'https://api.github.com/users/fernandofreamunde/subscriptions',
//         organizations_url:
//           'https://api.github.com/users/fernandofreamunde/orgs',
//         repos_url: 'https://api.github.com/users/fernandofreamunde/repos',
//         events_url:
//           'https://api.github.com/users/fernandofreamunde/events{/privacy}',
//         received_events_url:
//           'https://api.github.com/users/fernandofreamunde/received_events',
//         type: 'User',
//         site_admin: false,
//       },
//       labels: [],
//       state: 'open',
//       locked: false,
//       assignee: null,
//       assignees: [],
//       milestone: null,
//       comments: 0,
//       created_at: '2023-04-16T07:17:57Z',
//       updated_at: '2023-04-16T07:17:57Z',
//       closed_at: null,
//       author_association: 'OWNER',
//       active_lock_reason: null,
//       body: 'Symfony is a popular PHP framework used for developing web applications. If you\'re new to Symfony, here\'s a simple guide to help you get started:\r\n\r\nInstall Symfony: The first step to using Symfony is to install it on your computer. You can download the installation file from the official Symfony website. Follow the instructions provided to complete the installation process.\r\n\r\nLearn the basics: Once you have installed Symfony, it\'s time to learn the basics. Symfony uses the Model-View-Controller (MVC) pattern, so you should start by learning about controllers, views, and models. You should also learn about Symfony\'s routing system, which is used to map URLs to controller actions.\r\n\r\nCreate a new project: Symfony provides a command-line interface (CLI) tool called "Symfony Console" that you can use to create a new project. Open a command prompt and run the following command:\r\n\r\n```bash\r\nsymfony new myproject --full\r\n```\r\n\r\nThis command will create a new Symfony project named "myproject" with all the necessary components and dependencies.\r\n\r\nCreate a new controller: In Symfony, controllers are responsible for handling user requests and returning responses. To create a new controller, open the "src/Controller" directory in your project and create a new PHP file with the following code:\r\n\r\n```php\r\n<?php\r\n\r\nnamespace App\\Controller;\r\n\r\nuse Symfony\\Component\\HttpFoundation\\Response;\r\n\r\nclass HelloController\r\n{\r\n    public function index()\r\n    {\r\n        return new Response(\'<html><body>Hello, World!</body></html>\');\r\n    }\r\n}\r\n```\r\n\r\nThis controller returns a simple HTML response with the text "Hello, World!".\r\n\r\nCreate a new route: Symfony uses a routing system to map URLs to controller actions. To create a new route for our "HelloController", open the "config/routes.yaml" file in your project and add the following code:\r\n\r\n```php\r\nhello:\r\n    path: /hello\r\n    controller: App\\Controller\\HelloController::index\r\n```\r\n\r\nThis route maps the "/hello" URL to the "index" action of the "HelloController".\r\n\r\nRun the application: To run the application, open a command prompt and navigate to the root directory of your project. Run the following command:\r\n\r\n```bash\r\nsymfony server:start\r\n```\r\n\r\nThis command will start the Symfony development server. Open a web browser and navigate to "http://localhost:8000/hello". The browser should display the text "Hello, World!".\r\n\r\nIn conclusion, Symfony is a powerful PHP framework that can help you develop web applications quickly and efficiently. By following the steps outlined above, you can get started with Symfony and start building your own web applications.\r\n',
//       reactions: {
//         url: 'https://api.github.com/repos/fernandofreamunde/challenge-github-blog/issues/6/reactions',
//         total_count: 0,
//         '+1': 0,
//         '-1': 0,
//         laugh: 0,
//         hooray: 0,
//         confused: 0,
//         heart: 0,
//         rocket: 0,
//         eyes: 0,
//       },
//       timeline_url:
//         'https://api.github.com/repos/fernandofreamunde/challenge-github-blog/issues/6/timeline',
//       performed_via_github_app: null,
//       state_reason: null,
//       score: 1.0,
//     },
//   ],
// }
