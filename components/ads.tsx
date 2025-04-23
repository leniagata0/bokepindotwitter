'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

class AdCodeWithoutRouter extends React.Component {
  renderAds() {
    (window.adsbyjuicy = window.adsbyjuicy || []).push({});
  }

  componentDidMount() {
    this.renderAds();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds();
    }
  }

  render() {
    return (
      <div className="container mx-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          id="718531"
          data-height="250"
          data-width="300"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script dangerouslySetInnerHTML={{ __html: '(window.adsbyjuicy = window.adsbyjuicy || []).push({'adzone':718531});' }}></script>
      </div>
    );
  }
}

const AdScript = () => {
  const router = useRouter();
  return <AdCodeWithoutRouter router={router} />;
};

export default AdScript;
