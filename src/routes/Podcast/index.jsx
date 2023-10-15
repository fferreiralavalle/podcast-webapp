import Section from '../../components/Section';
import { useLoaderData } from 'react-router-dom';
import { Container, Description, DescriptionTitle, Episodes, LeftContent, MainContent, PodcastImage, TableContainer, Title, TitleDescription } from './styles';
import TableOfEpisodes from '../../components/TableOfEpisodes';

const Podacast = () => {
    
    const data = useLoaderData()

    return (
        <Section>
            {(
                <Container>
                    <LeftContent>
                        <PodcastImage src={data?.image}/>
                        <TitleDescription>
                            <Title>{data?.title}</Title>
                            <Description>By {data?.artist}</Description>
                        </TitleDescription>
                        <DescriptionTitle>Description</DescriptionTitle>
                        <Description>{data?.summary}</Description>
                    </LeftContent>
                    <MainContent>
                        <>
                            <Episodes>{`Episodes: ${data?.episodes?.length}`}</Episodes>
                            <TableContainer>
                                <TableOfEpisodes episodes={data?.episodes} />
                            </TableContainer>
                        </>
                    </MainContent>
                </Container>
            )}
        </Section>
    )
}

export default Podacast;