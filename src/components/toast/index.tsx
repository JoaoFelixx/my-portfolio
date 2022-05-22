import { useState, useEffect, ReactNode } from 'react';
import { AlertMessage } from './style';
import { BiErrorCircle } from 'react-icons/bi';

interface Message {
	message: string;
}

export function AlertErr({ message }: Message) {
	const [isVisible, setIsVisible] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {

			setIsVisible(false)
		
		}, 5000)
	}, []);

	return (
		<AlertMessage isVisible={isVisible}>
			<BiErrorCircle color='#ff0000'/>
			<p>{message}</p>
		</AlertMessage>
	)
}

export const toast = {
	error: (message: string): ReactNode => <AlertErr message={message} />,
}