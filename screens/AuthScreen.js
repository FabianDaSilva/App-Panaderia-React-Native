import {
	Button,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import {COLORS} from '../constansts/Colors';
import {signup} from '../store/actions/auth.actions';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const AuthScreen = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const title = 'REGISTRO';
	const message = 'Ya tienes cuenta?';
	const messageAction = 'ingresar';
	const messageTarget = 'Login';

	
	const handleSingUp = () => {
		dispatch(signup(email, password));
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.screen}
		>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Email</Text>
					<TextInput
						style={styles.input}
						keyboardType="email-address"
						autoCapitalize="none"
						onChangeText={(text) => setEmail(text)}
					/>
					<Text style={styles.label}>Clave</Text>
					<TextInput
						style={styles.input}
						secureTextEntry
						autoCapitalize="none"
						onChangeText={(text) => setPassword(text)}
					/>
					<Button title="Registrame" onPress={handleSingUp} />
				</View>
				<View style={styles.prompt}>
					<Text style={styles.promptMessage}>{message}</Text>
					<TouchableOpacity onPress={() => dispatch(login(email, password))}>
						<Text style={styles.promptButton}>{messageAction}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontFamily: 'IBold',
		marginBottom: 18,
		textAlign: 'center',
	},
	container: {
		width: '80%',
		height: '85%',
		maxWidth: 400,
		padding: 12,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 10,
		backgrounColor: 'white',
	},
	prompt: {
		alingItems: 'center',
	},
	promptMessage: {
		fontSize: 16,
		fontFamily: 'IRegular',
		color: '#333',
	},
	promptButton: {
		fontSize: 16,
		fontFamily: 'IBold',
		color: COLORS.primary,
	},
	button: {
		backgrounColor: COLORS.primary,
	},
	inputContainer: {
		justifyContent: 'space-around',
		height: '40%',
	},
	input: {
		width: '100%',
		borderBottomWidth: 1.5,
		borderColor: 'grey',
	},
});

export default AuthScreen;
