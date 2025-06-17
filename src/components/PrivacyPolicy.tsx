import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Database, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<motion.header
				className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<div className="container mx-auto px-4 h-16 flex items-center justify-between">
					<motion.div
						className="flex items-center gap-3"
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
					>
						<img
							src="/logo.svg"
							alt="DayFlow"
							className="h-8 w-8"
						/>
						<span className="text-xl font-bold">DayFlow</span>
					</motion.div>
					<motion.div
						className="flex items-center gap-3"
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
					>
						<Button asChild variant="outline">
							<Link to="/">
								<ArrowLeft className="h-4 w-4 mr-2" />
								Back to Home
							</Link>
						</Button>
					</motion.div>
				</div>
			</motion.header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-12">
				<motion.div
					className="max-w-4xl mx-auto"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					{/* Title Section */}
					<motion.div
						className="text-center mb-12"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
						<p className="text-xl text-muted-foreground">
							Effective Date: June 17, 2025 | Last Updated: June 17, 2025
						</p>
					</motion.div>

					{/* Introduction */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Shield className="h-5 w-5" />
									Introduction
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground leading-relaxed">
									Dayflow is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our task management application and website (collectively, the "Service").
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Information We Collect */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Database className="h-5 w-5" />
									Information We Collect
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div>
									<h4 className="font-semibold mb-3">Personal Information</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
										<li><strong>Profile Information:</strong> User preferences, settings, and profile data you provide</li>
										<li><strong>Task Data:</strong> Tasks, boards, notes, dates, and other content you create in the application</li>
									</ul>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Google Calendar Integration</h4>
									<p className="text-muted-foreground mb-2">When you choose to connect your Google Calendar:</p>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li><strong>Calendar Access:</strong> We access your Google Calendar data to sync tasks and events</li>
										<li><strong>Calendar Events:</strong> We may create, read, update, and delete calendar events as directed by you</li>
										<li><strong>Calendar Metadata:</strong> Calendar names, IDs, and basic calendar information</li>
									</ul>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Technical Information</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li><strong>Usage Data:</strong> How you interact with our Service, features used, and time spent</li>
										<li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
										<li><strong>Log Data:</strong> IP address, access times, and pages viewed</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* How We Use Your Information */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>How We Use Your Information</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">We use your information to:</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground">
									<li><strong>Provide the Service:</strong> Create and manage your account, store your tasks and data</li>
									<li><strong>Sync with Google Calendar:</strong> Create and update calendar events based on your tasks</li>
									<li><strong>Improve User Experience:</strong> Customize your interface and remember your preferences</li>
									<li><strong>Service Communication:</strong> Send important updates about your account or the Service</li>
									<li><strong>Customer Support:</strong> Respond to your questions and provide assistance</li>
									<li><strong>Security:</strong> Protect against unauthorized access and maintain data security</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					{/* Data Storage and Security */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Data Storage and Security</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div>
									<h4 className="font-semibold mb-3">Data Storage</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>Your data is securely stored using Supabase, a trusted database service</li>
										<li>Data is encrypted in transit and at rest</li>
										<li>We implement industry-standard security measures to protect your information</li>
									</ul>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Data Retention</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>Account data is retained while your account is active</li>
										<li>You can delete your account and data at any time through the application</li>
										<li>Some data may be retained for legal or security purposes as required by law</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Third-Party Services */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Third-Party Services</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div>
									<h4 className="font-semibold mb-3">Supabase</h4>
									<p className="text-muted-foreground">
										We use Supabase for data storage and user authentication. Supabase's privacy practices are governed by their privacy policy.
									</p>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Google Services</h4>
									<p className="text-muted-foreground mb-2">When you connect Google Calendar:</p>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>We use Google's OAuth 2.0 for secure authentication</li>
										<li>Your Google data is accessed only as necessary for the calendar sync feature</li>
										<li>We comply with Google's API Services User Data Policy</li>
										<li>You can revoke access at any time through your Google Account settings</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Your Rights and Choices */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Users className="h-5 w-5" />
									Your Rights and Choices
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">You have the right to:</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground">
									<li><strong>Access:</strong> View the personal information we have about you</li>
									<li><strong>Update:</strong> Modify your account information and preferences</li>
									<li><strong>Delete:</strong> Remove your account and associated data</li>
									<li><strong>Disconnect:</strong> Revoke Google Calendar access at any time</li>
									<li><strong>Data Portability:</strong> Export your task data</li>
									<li><strong>Opt-out:</strong> Disable certain features or data collection</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					{/* Data Sharing */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Data Sharing</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									We do not sell, trade, or rent your personal information to third parties. We may share information only:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground">
									<li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
									<li><strong>Service Providers:</strong> With trusted partners who help us operate the Service (like Supabase)</li>
									<li><strong>Legal Requirements:</strong> When required by law or to protect our rights and users' safety</li>
									<li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					{/* Additional Sections */}
					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
						>
							<Card className="h-full">
								<CardHeader>
									<CardTitle>Children's Privacy</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground text-sm">
										Our Service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
									</p>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
						>
							<Card className="h-full">
								<CardHeader>
									<CardTitle>International Users</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground text-sm">
										Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Mail className="h-5 w-5" />
									Contact Us
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									If you have questions about this Privacy Policy or our data practices, please contact us:
								</p>
								<div className="space-y-2 text-muted-foreground">
									<p><strong>Email:</strong> help@dayflow.ca</p>
									<p><strong>Website:</strong> https://dayflow.ca</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Google API Compliance */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Google API Services User Data Policy Compliance</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									Our use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.
								</p>
								<p className="text-muted-foreground mb-2">Specifically:</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
									<li>We only access the minimum Google Calendar data necessary for our features</li>
									<li>We do not use Google data for advertising purposes</li>
									<li>We do not allow humans to read Google data unless required for security purposes</li>
									<li>We do not transfer Google data to third parties except as necessary to provide our Service</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					{/* Consent */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.4, ease: 'easeOut' }}
						className="text-center"
					>
						<Card>
							<CardContent className="pt-6">
								<p className="text-muted-foreground">
									By using our Service, you consent to the collection and use of your information as described in this Privacy Policy.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</main>
		</div>
	);
} 