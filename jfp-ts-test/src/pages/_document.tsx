import type { JSX } from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v16-pagesRouter';

interface MyDocumentProps extends DocumentInitialProps {
  emotionStyleTags: JSX.Element[];
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<MyDocumentProps> {
    return documentGetInitialProps(ctx);
  }

  render() {
    const { emotionStyleTags = [] } = this.props;

    return (
      <Html lang="en">
        <Head>
          <DocumentHeadTags emotionStyleTags={emotionStyleTags} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

