import React from 'react';
import { mount, shallow } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <PrivateRoute />', () => {
	const props = {
		location: {
			patname: '/marvel'
		}
	};

	test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {});

	const wrapper = mount(
		<MemoryRouter>
			<PrivateRoute
				isAuthenticated={true}
				component={() => <span>Listo!</span>}
				{...props}
			/>
		</MemoryRouter>
	);

	expect(wrapper.find('span').exists()).toBe(true);
});
