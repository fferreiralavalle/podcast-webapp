import useFetch from '../hooks/useFetch';
import { getTopPodcastUrl } from '../services/itunes';

const MainPage = () => {
    const { data, error, loading } = useFetch(getTopPodcastUrl(100));

    console.log({ data, error, loading })

    return (
        <section>
            Hello World!
        </section>
    )
}

export default MainPage;