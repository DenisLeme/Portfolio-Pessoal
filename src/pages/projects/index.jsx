import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style';

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch('https://api.github.com/users/DenisLeme/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();

          // Ordenar os itens por data de criação (do mais recente para o mais antigo)
          const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

          setItemsApi(sortedData);
        })
        .catch(e => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map(item => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              <Url>URL: <a href={`https://github.com/${item.full_name}`}>{item.full_name}</a></Url>
              <Created_at>
                Data Criação:{' '}
                {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
