import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { mainButtonStyles } from './styles/MainButtonStyles';

type MainButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary'; // 'primary' para "Siguiente", 'secondary' para "Cancelar".
  disabled?: boolean;
  style?: StyleProp<ViewStyle>; // Permite pasar estilos personalizados.
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
    style, // Estilo personalizado.
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
