import Document, { Html, Head, Main, NextScript } from 'next/document';

class TheSoundDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Palanquin:wght@100;200;300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Staatliches&display=swap" rel="stylesheet"></link>
                    
                    {/* UIkit CSS  */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/css/uikit.min.css" />
                    <script
                        async
                        src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
                    />
                    <script
                        async
                        src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"
                    />
                    <script
                        async
                        src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default TheSoundDocument;