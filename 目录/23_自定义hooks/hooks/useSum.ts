import { ref} from 'vue'

export default function(){
    //data
    let sum = ref(0)
    //function
    function add() {
        sum.value += 1
    }

    return{sum,add}
}

