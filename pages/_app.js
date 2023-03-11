import MainContainer from '../Components/MainContainer';
import '@/styles/globals.css';
import { UseStorage } from '../UseContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <UseStorage>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </UseStorage>
    </>
  );
}
