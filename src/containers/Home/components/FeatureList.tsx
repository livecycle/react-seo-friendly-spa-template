import { memo, Fragment } from 'react';
import { FeatureInfo } from '../../../config/features.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FeatureListProps = Readonly<{
  featureList: FeatureInfo[];
}>;

const FeatureList = memo<FeatureListProps>(({ featureList }) => (
  <Fragment>
    {featureList.map(({ packageName, description }, index) => (
      <h2 key={index} className='subtitle'>
        <FontAwesomeIcon icon='check' />
        {` ${description} `}
        {packageName && <code>{packageName}</code>}
      </h2>
    ))}
  </Fragment>
));

FeatureList.displayName = 'FeatureList';

export default FeatureList;