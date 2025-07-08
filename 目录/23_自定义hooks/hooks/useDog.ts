import { reactive } from 'vue'
import axios  from 'axios'

export default function(){
    //data
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_710.jpg'
    ])

    //function
    async function getDog() {
        try {
            let result = await axios.get('https://dog234.ceo/api/breed/pembroke/images/random')
            // console.log(result.data);
            dogList.push(result.data.message)
        } catch (error) {
            console.log(error);
            
        }
    }
    //向外部提供数据
    return{dogList,getDog}
}