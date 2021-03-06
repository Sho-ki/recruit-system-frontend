import Head from 'next/head';

import { useEffectOnce } from 'react-use';

function Success() {
  useEffectOnce(() => {
    if (process.browser) {
      function disableBack() {
        window.history.forward();
      }
      setTimeout(disableBack(), 0);
      window.onunload = function () {
        null;
      };
    }
  });

  return (
    <>
      <Head>
        <title>Recruit Test</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
          integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='d-flex align-items-center justify-content-center vh-100'>
        <div>
          <h3 className='text-center'>Thank you</h3>
          <p>
            Your answer has been successfully submitted to our Recuiting Team.
          </p>
        </div>
      </div>
    </>
  );
}

export default Success;
