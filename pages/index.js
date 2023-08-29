import CardList from '../components/cards/cardList';
import Layout from '../layout';
function HomePage() {
    const profiles = [{name: "Neeraj Chopra",id: 1,  description: 'Javelin'}, {name: "Neeraj Chopra",id:2,  age: 24,  description: 'Javelin'}];
  return (
    <CardList  profiles={profiles} />
  )
}
HomePage.getLayout = function getLayout(page){
  return (
      <>
       <Layout>
          {page}
        </Layout>
       
      </>
  )
}
export default HomePage;