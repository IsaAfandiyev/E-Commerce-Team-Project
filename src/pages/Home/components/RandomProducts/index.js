import RandomProductSlider from "./components/RandomProductSlider";
import RandomProductBox from "./components/RandomProductBox";
import styles from "./index.module.css"

function RandomProducts() {
    return <>
        <section>
            <RandomProductSlider/>
            <RandomProductBox/>
        </section>

    </>
}
export default RandomProducts;