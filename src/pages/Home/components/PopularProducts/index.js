import PopularProductsSlider from "./components/PopularProductsSlider";
import PopularProductsNav from "./components/PopularProductsNav";
import styles from './index.module.css'

function PopularProducts() {
    return <>
        <section>
            <PopularProductsSlider/>
            <PopularProductsNav/>
        </section>

    </>
}
export default PopularProducts;