import Cards from '../../components/cards/Cards'
import img from '../../assets/img.webp'
import styles from '../home/home.module.css'

const Home = ({products}) => {
    return(
        <>
        <section className={styles.bg}>
        </section>
         <Cards products={products}/>  
        </>
    )
}

export default Home;