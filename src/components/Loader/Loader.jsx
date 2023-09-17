import { Oval } from 'react-loader-spinner';
import { StyledLoaderContainer } from './Loader.styled';

const Loader = () => (
  <StyledLoaderContainer>
    <Oval height={80} width={80} color="#ff0000" ariaLabel="oval-loading" />
  </StyledLoaderContainer>
);

export default Loader;
