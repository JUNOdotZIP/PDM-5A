//Em forma de classes   
import react, {Component} from "react";
import {view, text, image} from "react-native";

class App extends Component {
    render(){
        let curso = 'INFO';
        return(
            <view>
                <text>Olá mundo!</text>
                <text>Exemplo!</text>
                <text style={{color: 'blue', frontSize: 30, margin: 15}}>Meu exemplo!</text>
                <image source={{URI: 'colocar a url aqui'}} style={{width: 300, height: 300}}></image>
                {/*URI é o caminho da imagem*/}
                {/* Image é obrigado a informar a largura e altura*/}
                <text>{curso}</text>
                {/*para chamar o componente*/}
                {/*<MinhaImagem/>*/}
                {/*Passando propriedades a largura e a altura */}
                {/*<MinhaImagem largura = {400} altura = {400} nome = "Imagem 1"/>*/}
            </view>
        );
    }
}
//para a imagem tem que ter o https
export default App; 

//caso queira criar um componente para a img    
//Não precisa colocar a view pq é um único componente 
class MinhaImagem extends Component{
    render(){
        let img = 'url da imagem';
        return(
            <view>
                <image source={{uri: img}} style={{width: 300, height: 300}}/>
                <image source={{uri: img}} style={{width: this.props.largura, height: this.props.altura}}/>
                <text> {this.props.nome}</text>
            </view>
        );
    }
}
