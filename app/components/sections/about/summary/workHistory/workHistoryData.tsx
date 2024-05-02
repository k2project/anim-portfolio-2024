import EstendioLogo from '@components/logos/estendio';
import { IHistoryItem } from './types';
import MoneyDashboardLogo from '@components/logos/moneyDashboard';
import Logo from '@components/logos/app';

export const workHistoryData: IHistoryItem[] = [
    {
        company: 'Estendio',
        title: 'Software Developer / Senior Frontend Developer',
        startDate: '2021',
        duration: '3 years',
        logo: <EstendioLogo />,
    },
    {
        company: 'Money Dashboard',
        title: 'Junior Frontend Developer',
        startDate: '2020',
        duration: '8 months',
        logo: <MoneyDashboardLogo />,
    },
    {
        company: 'Freelancer',
        title: 'Web Developer',
        startDate: '2019',
        duration: '3 years',
        logo: <Logo size={20} strokeWidth={5} gradient />,
    },
];
