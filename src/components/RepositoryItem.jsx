import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyleText";
import RepositoryStats from "./RepositiryStats";
import theme from "../theme";


const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
   return (   
        <View style={{ flexDirection: 'row', paddingBottom: 2}}>
            <View style={{ paddingRight: 10}}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl}} />
            </View>
            <View style={{ flex: 1}}>
                <StyledText fontWeight='bold'>{fullName}</StyledText>
                <StyledText color='secondary' >{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View>
   )
}

const RepositoryItem = ({item}) => (
    <View key={item.id} style={styles.container}>
        {/* <StyledText fontSize='subheading' fontWeight='bold'>{item.id}</StyledText> */}
        <RepositoryItemHeader {...item}/>
        <RepositoryStats {...item} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingVertical: 5
    },
    language: {
        padding: 4, 
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
        
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})


export default RepositoryItem