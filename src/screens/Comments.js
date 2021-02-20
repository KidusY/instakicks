import React,{useState,useEffect,useRef} from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity,Keyboard } from 'react-native'
import CommentsCard from '../components/commentsCard'
import BottomNavigation from '../components/bottomNavigationBar'

const { width } = Dimensions.get('screen')
const Comments = (props) => {
    const [comments, setComments] = useState(props.navigation.getParam("comments")[0].comments)
    const [textInput, setTextInput]= useState('');
    const [keyboardOffset, setKeyboardOffset] = useState(0);
    const onKeyboardShow = event => setKeyboardOffset(event.endCoordinates.height - 50);
    const onKeyboardHide = () => setKeyboardOffset(0);
    const keyboardDidShowListener = useRef();
    const keyboardDidHideListener = useRef();

    useEffect(() => {
        keyboardDidShowListener.current = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
        keyboardDidHideListener.current = Keyboard.addListener('keyboardWillHide', onKeyboardHide);

        return () => {
            keyboardDidShowListener.current.remove();
            keyboardDidHideListener.current.remove();
        };
    }, []);

const postComments = ()=>{
setComments([...comments,{comment:textInput,commentedBy:"JoHn_12_Doe",commentId:100,profilePic:require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}])
setTextInput('');
}

    return (
        <View style={{ flex: 1, backgroundColor: "#111" }}>
            <View style={{ width: width, borderBottomColor: "#bdbdbd", borderBottomWidth: 0.7 }}>
                <Text style={{ textAlign: "center", alignSelf: "center", marginTop: 50, fontSize: 20, color: 'white' }}>Comments</Text>
            </View>

            <ScrollView>
                {
                    comments.map((comment, i) => <CommentsCard key={i} imgUrl={comment.profilePic} displayName={comment.commentedBy} comment={comment.comment} />)
                }

            </ScrollView>

            <View style={{
                flexDirection: "row", alignContent: "center", justifyContent: "space-between", position: 'absolute',
                bottom: keyboardOffset + 80, }}>
                <Image source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')} style={{ width: 50, height: 50, borderRadius: 50, marginBottom: 5 }} />
                <View style={{
                    borderWidth: 1,
                    width: width - 70,
                    height: 40,
                    borderColor: "grey",
                    borderRadius: 10, 
                    marginLeft:10                   
                   
                    }}>
                    <TextInput style={{ width: width - 150, height:40, flex:1,flexWrap:"wrap",color: "white"}} autoCorrect multiline={true} value={textInput} onChangeText={(input)=> setTextInput(input)} />
                    <TouchableOpacity style={{ color: "white", position: 'absolute', right: 0, top: 10, width:50,height:30}} onPress={()=>postComments()}>
                        <Text style={{ color: "white" }}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BottomNavigation navigation={props.navigation.navigate} />
        </View>
    )
}
const style = StyleSheet.create({

})

export default Comments
