import Ract, { Component } from "react";
import DirectionButtons from "../DirectionButtons/DirectionButtons";
import config from "../../config/index";
//Will add other components here as we get going

export default class Game extends Component {
    state = {
        userID: "",
        name: "",
        description: "",
        moveDirection: "",
        error_message: "",
    };

    handleMove = direction => {
        config
        .axiosWithAuth()
        .post("#", {direction})
        .then(({ data: { description, name, error_message } }) => {
            error_message
                ? this.setState({
                    description,
                    name,
                    error_message,
                    moveDirection: ""
                })
                : this.setState({
                    description,
                    error_message,
                    moveDirection: direction
                });
        })
        .catch(err => console.log(err));
        };

        initialize = () => {
            config
                .axiosWithAuth()
                .get(`#`)
                .then(({ data: { userID, name, description } }) => {
                    this.setState({
                        userID,
                        name,
                        description,
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        };
        componentDidMount() {
            this.initializeGame();
        }
        
        render() {
            let { moveDirection } = this.state;
        //Add rest between Section tags
            return (
                <Section>
                </Section>
            );
        }
        }