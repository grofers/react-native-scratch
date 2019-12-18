import React, { Component } from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});

const FADE_OUT_DURATION = 300

class ScratchView extends Component {

    imageOpacity = new Animated.Value(1)

    constructor(props) {
        super(props);

        this.state = {
            visible: true,
        };
    }

    onScratchDone = () => {
        const { id, onScratchDone } = this.props;
        if (onScratchDone) {
            onScratchDone({ id, isScratchDone: true });
        }
    }

    onScratchCardWebPressed = () => {
        Animated.timing(
            this.imageOpacity,
            {
                duration: FADE_OUT_DURATION,
                toValue: 0,
                easing: Easing.out(Easing.linear),
                useNativeDriver: true
            }).start(this.onScratchDone);

        const that = this;
        setTimeout(() => {
            that.setState({ visible: false });
        }, FADE_OUT_DURATION);
    }

    render() {
        if (this.state.visible) {
            return (
                <TouchableWithoutFeedback
                    onPressIn={this.onScratchCardWebPressed}
                    style={[styles.container, {backgroundColor: this.props.placeholderColor}]}
                >
                    <Animated.Image
                        source={{ uri: this.props.imageUrl }}
                        style={[styles.image, {opacity: this.imageOpacity}]}
                    />
                </TouchableWithoutFeedback>
            );
        }

        return null;
    }
}

export default ScratchView
