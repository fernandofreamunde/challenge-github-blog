import { Header } from '../../components/Header'
import { TitleCard } from './components/TitleCard'
import { ArticleContent } from './styles'

export function Article() {
  return (
    <>
      <Header />
      <TitleCard />

      <ArticleContent>
        <p>
          <b>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </b>{' '}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>
        <p>
          Dynamic typing JavaScript is a loosely typed and dynamic language.
          Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
        <pre>let foo = 42; // foo is now a number</pre>
        <pre>foo = ‘bar’; // foo is now a string</pre>
        <pre>foo = true; // foo is now a boolean</pre>
      </ArticleContent>
    </>
  )
}
