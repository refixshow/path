import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag';

const token = process.env.GATSBY_API_DATO_CMS;

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       {
//         allArticles {
//           id
//           title
//           autor
//         }
//       }
//     `,
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

export default client;

// import { graphql, useStaticQuery } from 'gatsby';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

// const Gatsbydata = useStaticQuery(graphql`
//   {
//     allDatoCmsArticle(filter: { isprimary: { eq: true } }) {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `);

// console.log(Gatsbydata.allDatoCmsArticle.edges);

// const APOLLO_QUERY = gql`
//   {
//     allArticles {
//       id
//       title
//       autor
//     }
//   }
// `;

// const { loading, error, data } = useQuery(APOLLO_QUERY);

// if (loading) {
//   console.log('loading');
// }
// if (data) {
//   console.log(data);
// }
