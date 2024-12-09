import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { mainButtonStyles } from './styles/MainButtonStyles';

type MainButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>; 
};

const MainButton: React.FC<MainButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
}) => {
  const buttonStyle = [
    variant === 'primary'
      ? mainButtonStyles.primaryButton
      : mainButtonStyles.secondaryButton,
    disabled && mainButtonStyles.disabledButton,
    style, 
  ];

  const textStyle =
    variant === 'primary'
      ? mainButtonStyles.primaryText
      : mainButtonStyles.secondaryText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
