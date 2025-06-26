import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { 
	Download, 
	Github, 
	Shield, 
	Timer, 
	Star, 
	Monitor, 
	Trello,
	Calendar,
	Repeat,
	Zap,
	Database,
	Target,
	BarChart3,
	CheckSquare,
	Layers,
	EyeOff,
	Bell,
	User
} from 'lucide-react';
import { motion } from 'motion/react';

// Define platform types for downloads
type Platform = 'windows' | 'macos' | 'linux' | 'ios';

interface DownloadOption {
	platform: Platform;
	name: string;
	icon: React.ReactElement;
	filename: string;
	size: string;
	description: string;
}

// Platform-specific icons
const WindowsIcon = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox='0 0 24 24'
		fill='currentColor'
	>
		<path d='M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851' />
	</svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox='0 0 24 24'
		fill='currentColor'
	>
		<path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
	</svg>
);

export function Home() {
	const [detectedPlatform, setDetectedPlatform] = useState<Platform>('windows');

	// Auto-detect user's operating system
	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		const isIOS = /ipad|iphone|ipod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

		if (isIOS) {
			setDetectedPlatform('ios');
		} else if (userAgent.includes('mac')) {
			setDetectedPlatform('macos');
		} else if (userAgent.includes('linux')) {
			setDetectedPlatform('linux');
		} else {
			setDetectedPlatform('windows');
		}
	}, []);

	const downloadOptions: DownloadOption[] = [
		{
			platform: 'windows',
			name: 'Windows',
			icon: <WindowsIcon className='w-8 h-8' />,
			filename: 'dayflow_0.2.5_x64_en-US.msi',
			size: '4.2 MB',
			description: 'Windows 10/11 installer',
		},
		{
			platform: 'macos',
			name: 'macOS',
			icon: <AppleIcon className='w-10 h-10' />,
			filename: 'dayflow_0.2.5_universal.dmg',
			size: '12.8 MB',
			description: 'Universal binary for Intel & Apple Silicon',
		},
		{
			platform: 'linux',
			name: 'Linux',
			icon: (
				<img
					src='/linux.svg'
					alt='Linux'
					className='h-12 w-12'
				/>
			),
			filename: 'dayflow_0.2.5_amd64.AppImage',
			size: '98.5 MB',
			description: 'AppImage for all distributions',
		},
	];

	const getDownloadUrl = (filename: string) => `https://github.com/nikitalobanov12/dayflow/releases/latest/download/${filename}`;

	const primaryDownload = downloadOptions.find(option => option.platform === detectedPlatform);

	const technicalFeatures = [
		{
			icon: <Shield className='h-6 w-6' />,
			title: 'Built for Security',
			description: 'Your data is stored with bank-level encryption and protected by the highest security standards. Your privacy is our priority.',
		},
		{
			icon: <Database className='h-6 w-6' />,
			title: 'Always in Sync',
			description: 'Using reliable cloud infrastructure, your tasks and events are always up-to-date on all your devices.',
		},
		{
			icon: <EyeOff className='h-6 w-6' />,
			title: 'Completely Private',
			description: "We don't sell your data or use it for advertising. What's yours is yours, and we're committed to keeping it that way.",
		},
		{
			icon: <User className='h-6 w-6' />,
			title: 'You Own Your Data',
			description: 'You have full control over your information. You can export or delete your data at any time, no questions asked.',
		},
	];

	const upcomingFeatures = [
		{
			icon: <BarChart3 className='h-6 w-6' />,
			title: 'Time Analytics',
			description: 'Detailed insights into your productivity patterns and time allocation',
		},
		{
			icon: <Target className='h-6 w-6' />,
			title: 'AI Task Scheduling',
			description: 'Automatic task scheduling that acts as your personal productivity assistant',
		},
	];

	const focusFeatures = [
		{ icon: <EyeOff className='h-6 w-6' />, title: 'Minimal Interface', description: 'A clean, simple view that removes visual clutter so you can concentrate.' },
		{ icon: <Timer className='h-6 w-6' />, title: 'Structured Timers', description: 'Use the Pomodoro technique or custom intervals to structure your work sessions.' },
		{ icon: <Bell className='h-6 w-6' />, title: 'Break Reminders', description: 'Get simple, automatic notifications when it\'s time to take a well-deserved break.' },
		{ icon: <BarChart3 className='h-6 w-6' />, title: 'Session Tracking', description: 'Time spent in Focus Mode is automatically logged against your tasks.' },
	];

	return (
		<div className='min-h-screen bg-background'>
			{/* Header */}
			<motion.header
				className='border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<div className='container mx-auto px-4 h-16 grid grid-cols-3 items-center'>
					<motion.div
						className='flex items-center gap-3'
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
					>
						<img
							src='/logo.svg'
							alt='DayFlow'
							className='h-8 w-8'
						/>
						<span className='text-xl font-bold'>DayFlow</span>
					</motion.div>
					<motion.nav
						className='hidden md:flex items-center gap-8 justify-center'
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
					>
						<a
							href='#features'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Features
						</a>
						<a
							href='#download'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							Download
						</a>
						<a
							href='https://github.com/nikitalobanov12/dayflow'
							target='_blank'
							rel='noopener noreferrer'
							className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
						>
							GitHub
						</a>
					</motion.nav>
					<motion.div
						className='flex items-center gap-3 justify-end'
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
					>
						<ThemeToggle />
						<Button
							asChild
							variant='outline'
							className='hidden sm:inline-flex hover-lift'
						>
							<a
								href='https://app.dayflow.ca'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Sign in to DayFlow Web App'
							>
								Sign In
							</a>
						</Button>
						<Button
							asChild
							className='hidden sm:inline-flex'
						>
							<a href={getDownloadUrl(primaryDownload?.filename || downloadOptions[0].filename)}>
								<Download className='h-4 w-4 mr-2' />
								Download
							</a>
						</Button>
					</motion.div>
				</div>
			</motion.header>

			{/* Hero Section */}
			<section className='relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/20'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						>
							<Badge
								variant='secondary'
								className='mb-6 text-xs px-3 py-1'
							>
								<Star className='h-3 w-3 mr-1 fill-current' />
								v0.2.5 - Premium Task Management
							</Badge>

							<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight'>
								<span className='text-foreground'>Build Your Perfect Day,</span>
								<br />
								<span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>in Seconds.</span>
							</h1>

							<p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed'>
							DayFlow automatically organizes your tasks and Calendar into a single, focused plan. Reduce mental clutter and focus on execution.
							</p>

							<motion.div
								className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										asChild
										size='lg'
										className='px-6 py-3'
									>
										<a href={getDownloadUrl(primaryDownload?.filename || downloadOptions[0].filename)}>
											<Download className='h-4 w-4 mr-2' />
											Download for {primaryDownload?.name || 'Windows'}
										</a>
									</Button>
								</motion.div>

								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										asChild
										variant='outline'
										size='lg'
										className='px-6 py-3'
									>
										<a
											href='https://app.dayflow.ca'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Monitor className='h-4 w-4 mr-2' />
											Try Web Version
										</a>
									</Button>
								</motion.div>
							</motion.div>

							{/* Key Stats */}
							<motion.div
								className='flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-12'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
							>
								<div className='flex items-center gap-2'>
									<Calendar className='h-4 w-4' />
									<span>Google Calendar sync</span>
								</div>
								<div className='flex items-center gap-2'>
									<Shield className='h-4 w-4' />
									<span>Secure & Private</span>
								</div>
								<div className='flex items-center gap-2'>
									<Zap className='h-4 w-4' />
									<span>Works instantly</span>
								</div>
								<div className='flex items-center gap-2'>
									<Monitor className='h-4 w-4' />
									<span>Desktop & web</span>
								</div>
							</motion.div>
						</motion.div>


					</div>
				</div>
			</section>

			{/* Core Features Section */}
			<section
				id='features'
				className='py-24 bg-muted/30'
			>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>How It Works</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Get Set Up in Seconds</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							See a clear view of your day in a few simple steps.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
						{[
							{ icon: <Calendar className='h-6 w-6' />, title: '1. Connect Your Calendar', description: 'Connect your Google Calendar to instantly sync all your meetings and events into one place.' },
							{ icon: <Trello className='h-6 w-6' />, title: '2. See Your To-Do List', description: 'Import your Google Tasks or create new ones directly in DayFlow. Manage everything on a simple board.' },
							{ icon: <Zap className='h-6 w-6' />, title: '3. Get a Clear Plan', description: 'DayFlow automatically builds a unified schedule from your tasks and events, so you know exactly what to do next.' },
							{ icon: <Target className='h-6 w-6' />, title: '4. Execute Your Plan', description: 'Spend less time planning and more time doing. With a clear plan, you can focus on completing your most important work.' },
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Card className='text-center h-full transition-all duration-300 hover:shadow-lg'>
									<CardContent className='p-6'>
										<motion.div
											className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{feature.icon}
										</motion.div>
										<h3 className='text-lg font-semibold mb-3'>{feature.title}</h3>
										<p className='text-muted-foreground text-sm leading-relaxed'>{feature.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>
{/* Google Calendar Integration */}
<section className='py-24'>
				<div className='container mx-auto px-4'>
					<div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
						<motion.div
							className='relative'
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<div className='bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 backdrop-blur border border-border/50'>
								<Calendar className='h-16 w-16 text-primary mb-6' />
								<div className='space-y-4'>
									<div className='flex items-center gap-3'>
										<div className='h-3 w-3 rounded-full bg-green-500' />
										<span className='text-sm'>Calendar and Tasks are Linked</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='h-3 w-3 rounded-full bg-blue-500' />
										<span className='text-sm'>Your To-Do Lists are Here</span>
									</div>
									<div className='flex items-center gap-3'>
										<div className='h-3 w-3 rounded-full bg-purple-500' />
										<span className='text-sm'>Events Can Become Tasks</span>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<Badge
								variant='secondary'
								className='mb-4'
							>
								<Calendar className='h-3 w-3 mr-1' />
								Calendar Integration
							</Badge>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>A Calendar That Works With You</h2>
							<p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
								DayFlow truly syncs with Google Calendar. Tasks with due dates show up on your calendar, and your calendar events show up in DayFlow. When you change one, the other updates automatically.
							</p>
							<div className='space-y-4'>
								{[
									'Add a due date, and your task appears on your calendar.',
									'See your calendar events next to your tasks so you know what to do.',
									'Change a task here, and it updates on your calendar instantly.',
									'Bring in all your to-do lists from Google Tasks easily.',
								].map((item, index) => (
									<motion.div
										key={index}
										className='flex items-center gap-3'
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.4,
											delay: index * 0.1,
											ease: 'easeOut',
										}}
										viewport={{ once: true }}
									>
										<div className='h-2 w-2 rounded-full bg-primary flex-shrink-0' />
										<span className='text-muted-foreground'>{item}</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>
	{/* More Benefits */}
	<section className='py-24 bg-muted/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>Features</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Everything You Need to Get Organized</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							DayFlow has simple features to help you stay organized and feel in control of your day.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						{[
							{ icon: <Repeat className='h-6 w-6' />, title: 'Repeating Tasks', description: 'Set up daily or weekly tasks once, and DayFlow will add them for you automatically.' },
							{ icon: <CheckSquare className='h-6 w-6' />, title: 'Subtasks', description: 'Break big projects into small, easy-to-manage steps and track your progress.' },
							{ icon: <Layers className='h-6 w-6' />, title: 'Project Boards', description: 'Keep your work and personal to-do lists separate with different boards.' },
							{ icon: <Shield className='h-6 w-6' />, title: 'Secure and Private', description: 'Your tasks are saved securely, and you can access them from anywhere.' },
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Card className='text-center h-full transition-all duration-300 hover:shadow-lg'>
									<CardContent className='p-6'>
										<motion.div
											className='h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4 text-secondary-600 dark:text-secondary-400'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{feature.icon}
										</motion.div>
										<h3 className='text-lg font-semibold mb-3'>{feature.title}</h3>
										<p className='text-muted-foreground text-sm leading-relaxed'>{feature.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			

			{/* Recurring Tasks */}
			<section className='py-24 bg-muted/30'>
				<div className='container mx-auto px-4'>
					<div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<Badge
								variant='secondary'
								className='mb-4'
							>
								<Repeat className='h-3 w-3 mr-1' />
								Automation
							</Badge>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>Set Up Repeating Tasks</h2>
							<p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
								Have a task you do every day or week? Set it up once, and DayFlow will add it to your list for you automatically so you don't forget.
							</p>
							<div className='space-y-4'>
								{[
									'Perfect for things you do every day, week, or month.',
									'You can set any kind of repeating schedule.',
									'Every time it repeats, you get a new task to check off.',
									'A simple way to build good habits.',
								].map((item, index) => (
									<motion.div
										key={index}
										className='flex items-center gap-3'
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.4,
											delay: index * 0.1,
											ease: 'easeOut',
										}}
										viewport={{ once: true }}
									>
										<div className='h-2 w-2 rounded-full bg-primary flex-shrink-0' />
										<span className='text-muted-foreground'>{item}</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							className='relative'
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
						>
							<div className='bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 backdrop-blur border border-border/50'>
								<Repeat className='h-16 w-16 text-secondary-600 dark:text-secondary-400 mb-6' />
								<div className='space-y-6'>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium'>Team Standup</span>
										<Badge variant='outline' className='text-xs'>Daily</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium'>Weekly Review</span>
										<Badge variant='outline' className='text-xs'>Every Friday</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium'>Monthly Report</span>
										<Badge variant='outline' className='text-xs'>Last day of month</Badge>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium'>Quarterly Planning</span>
										<Badge variant='outline' className='text-xs'>Every 3 months</Badge>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			<section className='py-24 bg-muted/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge
							variant='secondary'
							className='mb-4'
						>
							<Timer className='h-3 w-3 mr-1' />
							Focus Mode
						</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>A Distraction-Free Way to Work</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							A clean, simple screen and built-in timers help you concentrate on one thing at a time.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
						{focusFeatures.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Card className='text-center h-full transition-all duration-300 hover:shadow-lg'>
									<CardContent className='p-6'>
										<motion.div
											className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{feature.icon}
										</motion.div>
										<h3 className='text-lg font-semibold mb-3'>{feature.title}</h3>
										<p className='text-muted-foreground text-sm leading-relaxed'>{feature.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

		

			{/* Coming Soon */}
			<section className='py-24'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>What We're Building Next</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>What We're Building Next</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							We're always working to make DayFlow better. Here's what's coming soon.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 gap-8 max-w-2xl mx-auto'>
						{upcomingFeatures.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Card className='text-center h-full transition-all duration-300 hover:shadow-lg'>
									<CardContent className='p-6'>
										<motion.div
											className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{feature.icon}
										</motion.div>
										<h3 className='text-lg font-semibold mb-3'>{feature.title}</h3>
										<p className='text-muted-foreground text-sm leading-relaxed'>{feature.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Technical Features */}
			<section className='py-24 bg-muted/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<Badge variant='secondary' className='mb-4'>Your Peace of Mind</Badge>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Secure, Private, and Reliable</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							We're committed to protecting your data and your privacy. Here's how we keep your information safe.
						</p>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto'>
						{technicalFeatures.map((tech, index) => (
							<motion.div
								key={tech.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Card className='text-center h-full transition-all duration-300 hover:shadow-lg'>
									<CardContent className='p-6'>
										<motion.div
											className='h-12 w-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4 text-muted-foreground'
											whileHover={{
												scale: 1.1,
												rotate: 5,
												transition: { duration: 0.2 },
											}}
										>
											{tech.icon}
										</motion.div>
										<h3 className='text-lg font-semibold mb-3'>{tech.title}</h3>
										<p className='text-muted-foreground text-sm leading-relaxed'>{tech.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Download Section */}
			<section
				id='download'
				className='py-24 bg-muted/30'
			>
				<div className='container mx-auto px-4'>
					<motion.div
						className='text-center mb-16'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ once: true, margin: '-50px' }}
					>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Download DayFlow</h2>
						<p className='text-xl text-muted-foreground mb-8'>Available for Windows, macOS, and Linux. Or use the Web Version on any device.</p>
					</motion.div>

					{detectedPlatform === 'ios' ? (
						// iOS-specific layout
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, margin: '-50px' }}
							className='max-w-2xl mx-auto text-center'
						>
							<Card className='p-8'>
								<div className='mb-6'>
									<AppleIcon className='h-16 w-16 mx-auto text-muted-foreground' />
								</div>
								<h3 className='text-2xl font-bold mb-4'>iOS Version Coming Soon</h3>
								<p className='text-muted-foreground mb-8'>
									We're working on an app for iPhone and iPad. In the meantime, you can use the web version or download the app for your computer.
								</p>
								<div className='flex flex-col sm:flex-row gap-4 justify-center'>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											asChild
											size='lg'
										>
											<a
												href='https://app.dayflow.ca'
												target='_blank'
												rel='noopener noreferrer'
											>
												<Monitor className='h-4 w-4 mr-2' />
												Try Web Version
											</a>
										</Button>
									</motion.div>
								</div>
							</Card>

							{/* Desktop options for iOS users */}
							<motion.div
								className='mt-12'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
								viewport={{ once: true, margin: '-50px' }}
							>
								<h4 className='text-lg font-semibold mb-6'>Or download for your desktop:</h4>
								<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
									{downloadOptions.map((option, index) => (
										<motion.div
											key={option.platform}
											initial={{ opacity: 0, y: 30 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												delay: index * 0.1,
												ease: 'easeOut',
											}}
											viewport={{ once: true }}
											whileHover={{
												y: -5,
												transition: { duration: 0.2 },
											}}
										>
											<Card className='h-full hover:shadow-lg transition-all duration-300'>
												<CardContent className='text-center p-4'>
													<motion.div
														className='h-12 w-12 flex items-center justify-center mx-auto mb-3'
														whileHover={{
															scale: 1.1,
															transition: { duration: 0.2 },
														}}
													>
														{option.icon}
													</motion.div>
													<p className='font-medium mb-2'>{option.name}</p>
													<motion.div
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
													>
														<Button
															asChild
															className='w-full'
															size='sm'
														>
															<a href={getDownloadUrl(option.filename)}>
																<Download className='h-4 w-4 mr-2' />
																Download
															</a>
														</Button>
													</motion.div>
												</CardContent>
											</Card>
										</motion.div>
									))}
								</div>
							</motion.div>
						</motion.div>
					) : (
						// Regular download section for desktop platforms
						<>
							<div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
								{downloadOptions.map((option, index) => (
									<motion.div
										key={option.platform}
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.6,
											delay: index * 0.1,
											ease: 'easeOut',
										}}
										viewport={{ once: true, margin: '-50px' }}
										whileHover={{
											y: -10,
											transition: { duration: 0.3 },
										}}
									>
										<Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl h-full ${option.platform === detectedPlatform ? 'ring-2 ring-primary' : ''}`}>
											{option.platform === detectedPlatform && (
												<motion.div
													initial={{ scale: 0, opacity: 0 }}
													animate={{ scale: 1, opacity: 1 }}
													transition={{ duration: 0.3, delay: 0.5 }}
												>
													<Badge className='absolute top-4 right-4'>Recommended</Badge>
												</motion.div>
											)}
											<CardHeader className='text-center'>
												<motion.div
													className='h-16 w-16 flex items-center justify-center mx-auto mb-4'
													whileHover={{
														scale: 1.1,
														rotate: 5,
														transition: { duration: 0.2 },
													}}
												>
													{option.icon}
												</motion.div>
												<CardTitle className='text-2xl'>{option.name}</CardTitle>
												<CardDescription>{option.description}</CardDescription>
											</CardHeader>
											<CardContent className='text-center space-y-4'>
												<div className='text-sm text-muted-foreground'>
													<p>{option.size}</p>
												</div>
												<motion.div
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
												>
													<Button
														asChild
														className='w-full'
														size='lg'
													>
														<a href={getDownloadUrl(option.filename)}>
															<Download className='h-4 w-4 mr-2' />
															Download
														</a>
													</Button>
												</motion.div>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>

							{/* Additional Linux Option */}
							<motion.div
								className='mt-8 text-center'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
								viewport={{ once: true, margin: '-50px' }}
							>
								<p className='text-sm text-muted-foreground mb-4'>For Linux, you can also download the .deb file:</p>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										variant='outline'
										asChild
									>
										<a href={getDownloadUrl('dayflow_0.2.5_amd64.deb')}>
											<Download className='h-4 w-4 mr-2' />
											Download .deb (6.2 MB)
										</a>
									</Button>
								</motion.div>
							</motion.div>
						</>
					)}
				</div>
			</section>

			{/* Footer */}
			<motion.footer
				className='border-t border-border/40 py-12'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true, margin: '-50px' }}
			>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
						<motion.div
							className='flex items-center gap-3'
							initial={{ x: -20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<img
								src='/logo.svg'
								alt='DayFlow'
								className='h-6 w-6'
							/>
							<span className='font-semibold'>DayFlow</span>
							<span className='text-sm text-muted-foreground'>v0.2.5</span>
						</motion.div>

						<motion.div
							className='flex items-center gap-6'
							initial={{ x: 20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<motion.a
								href='https://github.com/nikitalobanov12/dayflow'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2'
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<Github className='h-4 w-4' />
								GitHub
							</motion.a>
							<motion.a
								href='https://github.com/nikitalobanov12/dayflow/releases'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								Release Notes
							</motion.a>
							<motion.div
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<motion.a
									href='https://www.dayflow.ca/privacy-policy'

										className='text-muted-foreground hover:text-foreground transition-colors'
								>
									Privacy Policy
								</motion.a>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<motion.a
									href='https://www.dayflow.ca/terms-of-service'
									className='text-muted-foreground hover:text-foreground transition-colors'
								>
									Terms of Service
								</motion.a>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.footer>
		</div>
	);
} 