import React, {useState} from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import ExploreTab from '../components/exploreTab';
import ExploreImgCard from '../components/exploreImgCard';
import BottomNavigationBar from '../components/bottomNavigationBar';



const { width } = Dimensions.get('screen')
const Popular = (props) => {
    const [postedPics, setPostedPics] = useState([
        { imgUrl: require('../assets/postedPic/post1.jpeg'), type: "jordan" },
        { imgUrl: require('../assets/postedPic/post2.jpeg'), type: "yeezy" },
        { imgUrl: require('../assets/postedPic/post3.jpeg'), type: "yeezy" },
        { imgUrl: require('../assets/postedPic/post4.jpeg'), type: "jordan" },
        { imgUrl: require('../assets/postedPic/post5.jpeg'), type: "yeezy" },
        { imgUrl: require('../assets/postedPic/post6.jpeg'), type: "jordan" },
        { imgUrl: require('../assets/postedPic/post7.jpeg'), type: "Adidas" },
        { imgUrl: require('../assets/postedPic/post8.jpeg'), type: "jordan" },
        { imgUrl: require('../assets/postedPic/post9.jpeg'), type: "yeezy" },
        { imgUrl: require('../assets/postedPic/post10.jpeg'), type: "Adidas" }
    ]
)
const [filterFactors,setFilterFactors]=useState([])
   
     const filter= (filterFactor) =>{ 

         if (!filterFactors.includes(filterFactor))       
      setFilterFactors([...filterFactors,filterFactor])
        else{
          let newFilterFactors  = filterFactors.filter((Factor)=> Factor !== filterFactor )
             setFilterFactors(newFilterFactors)
        } 
      
     }
 
    return (
        <View style={{ backgroundColor: "#111111", flex: 1 }}>
            <View style={{ width: width, height: 100, flexDirection: 'row', alignContent: "center", justifyContent: "space-evenly" }}>

                <ExploreTab tabText={"jordan"} bgColor={"#1EB9A7"} filter={filter}/>
                <ExploreTab tabText={"Adidas"} bgColor={"#1EB9A7"} filter={filter}/>
                <ExploreTab tabText={"yeezy"} bgColor={"#1EB9A7"} filter={filter}/>
            </View>
            <ScrollView scrollEnabled>
                <View style={style.imgContainer}>
                    {
                        
                        postedPics.map((postedPic, i) => {
                           if(!filterFactors.includes(postedPic.type))
                           return <ExploreImgCard imgUrl={postedPic.imgUrl} key={i}/>
                            
                            })
                    }
                </View>
            </ScrollView>

            <BottomNavigationBar navigation={props.navigation.navigate} />

        </View>
    )
}

const style = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        width: width
    },
    Img: {
        width: width / 2,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 10
    }
})

export default Popular
