import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ content, frontmatter }) {
  return (
    <article>
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = data.date.toLocaleDateString('en-US', options);

  const frontmatter = {
    ...data,
    date: formattedDate
  };

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter
    }
  };
}
