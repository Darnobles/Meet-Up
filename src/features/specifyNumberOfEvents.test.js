import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
defineFeature(feature, test => {
    
});