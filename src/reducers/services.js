import reduxifyServices from 'feathers-redux';
import feathersClient from '../feathers';

const services = reduxifyServices(feathersClient, ['users']);

export default services;
