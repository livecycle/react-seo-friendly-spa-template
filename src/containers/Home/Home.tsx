import { useMemo, FunctionComponent } from 'react';
import { FeatureList } from './components';
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeatureInfoConfig, FeatureInfo } from '../../config/features.config';

const Home: FunctionComponent = () => {
  const featureList = useMemo<FeatureInfo[]>(
    () => Object.values(FeatureInfoConfig),
    []
  );

  return (
    <div className='view-wrapper'>
      <MetaInfo {...RoutesConfig.Home.metaInfo} />
      <section className='hero is-dark'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='is-flex is-horizontal-center'>
              <figure className='image is-158x158'>
                <FontAwesomeIcon
                  icon={['fab', 'react']}
                  className='react-svg spinClockwise-animation'
                />
              </figure>
            </div>
            <h1 className='title blog-title'>SEO Friendly SPA</h1>
            <hr />
            <FeatureList featureList={featureList} />
          </div>
        </div>
      </section>
      <section className='container dashboard-content'>
        <div className='columns'>
          <div className='column'>
            <p className='title'>react-helmet</p>
            <div className='content'>
              <p>
                <code>react-helmet</code> 3
              </p>
              <p>
                3
              </p>
            </div>
          </div>
          <hr />
          <div className='column'>
            <p className='title'>react-ga</p>
            <div className='content'>
              <p>
                <code>react-ga</code> 3
              </p>
              <p>
                3
              </p>
            </div>
          </div>
          <hr />
          <div className='column'>
            <p className='title'>react-snapshot</p>
            <div className='content'>
              <p>
                <code>react-snapshot</code> is a zero-configuration static
                pre-renderer for React apps. Starting by targeting Create React
                App (because it's great)
              </p>
              <p>
                3
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className='columns'>
          <div className='column'>
            <p className='title'>Lorem Ipsum</p>
            <div className='content'>
              Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis
              in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu.
              Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne
              delectus expetendis philosophia nam. Mel lorem recusabo ex, vim
              congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei.
              Qui ne urbanitas conceptam deseruisse, commune philosophia eos no.
              Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec
              facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait
              atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et
              nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum
              viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant
              regione argumentum vis id, adipisci accusata postulant at vix.
              Adipisci vituperata ea duo, eu summo detracto mei, et per option
              periculis. Eos laudem vivendo ex.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
