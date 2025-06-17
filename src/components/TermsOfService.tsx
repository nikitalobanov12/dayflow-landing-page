import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Scale, AlertTriangle, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
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
						<h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
						<p className="text-xl text-muted-foreground">
							Effective Date: January 1, 2024 | Last Updated: January 1, 2024
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
									<FileText className="h-5 w-5" />
									Introduction
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Welcome to Dayflow! These Terms of Service ("Terms") govern your use of the Dayflow task management application and website (collectively, the "Service") operated by Dayflow ("we," "our," or "us").
								</p>
								<p className="text-muted-foreground leading-relaxed">
									By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Acceptance of Terms */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Scale className="h-5 w-5" />
									Acceptance of Terms
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground leading-relaxed mb-4">
									By downloading, installing, or using Dayflow, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground">
									<li>You must be at least 13 years old to use our Service</li>
									<li>You are responsible for ensuring compliance with local laws and regulations</li>
									<li>These Terms constitute a legally binding agreement between you and Dayflow</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					{/* Description of Service */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Description of Service</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Dayflow is a task management application that helps you organize your work and improve productivity. Our Service includes:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground">
									<li><strong>Task Management:</strong> Create, organize, and track your tasks and projects</li>
									<li><strong>Sprint Mode:</strong> Focus sessions with timed work periods and breaks</li>
									<li><strong>Calendar Integration:</strong> Optional Google Calendar synchronization</li>
									<li><strong>Cross-Platform Apps:</strong> Desktop applications for Windows, macOS, and Linux</li>
									<li><strong>Web Application:</strong> Browser-based access to your tasks</li>
									<li><strong>Data Synchronization:</strong> Sync your data across devices using our cloud service</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					{/* User Accounts and Registration */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>User Accounts and Registration</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-3">Account Creation</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>You may need to create an account to access certain features of the Service</li>
										<li>You must provide accurate, current, and complete information during registration</li>
										<li>You are responsible for maintaining the confidentiality of your account credentials</li>
									</ul>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Account Responsibility</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>You are responsible for all activities that occur under your account</li>
										<li>You must immediately notify us of any unauthorized use of your account</li>
										<li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Acceptable Use */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<AlertTriangle className="h-5 w-5" />
									Acceptable Use
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">You agree not to use the Service to:</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
									<li>Violate any applicable laws, regulations, or third-party rights</li>
									<li>Transmit any harmful, offensive, or inappropriate content</li>
									<li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
									<li>Use the Service for any commercial purpose without our explicit consent</li>
									<li>Interfere with or disrupt the integrity or performance of the Service</li>
									<li>Reverse engineer, decompile, or disassemble any part of the Service</li>
									<li>Use automated scripts or bots to access the Service</li>
									<li>Share your account credentials with others</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					{/* Intellectual Property */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Intellectual Property Rights</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-3">Our Rights</h4>
									<p className="text-muted-foreground text-sm mb-2">
										The Service and its original content, features, and functionality are and will remain the exclusive property of Dayflow and its licensors. The Service is protected by copyright, trademark, and other laws.
									</p>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Your Content</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
										<li>You retain ownership of any content you create or upload to the Service</li>
										<li>You grant us a license to store, process, and display your content as necessary to provide the Service</li>
										<li>You are responsible for ensuring you have the right to use any content you upload</li>
									</ul>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Open Source</h4>
									<p className="text-muted-foreground text-sm">
										Certain components of Dayflow are open source and available under their respective licenses. This does not grant you rights to our proprietary code or trademarks.
									</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Data and Privacy */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Shield className="h-5 w-5" />
									Data and Privacy
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
									<li>We collect only the minimum data necessary to provide the Service</li>
									<li>You can delete your account and data at any time</li>
									<li>We use industry-standard security measures to protect your data</li>
									<li>We do not sell your personal information to third parties</li>
								</ul>
								<p className="text-muted-foreground text-sm mt-4">
									Please review our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for detailed information about our data practices.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Service Availability */}
					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
						>
							<Card className="h-full">
								<CardHeader>
									<CardTitle>Service Availability</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground text-sm mb-3">
										We strive to provide reliable service but cannot guarantee 100% uptime. We may:
									</p>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs">
										<li>Perform maintenance that temporarily interrupts service</li>
										<li>Update or modify features with notice when possible</li>
										<li>Suspend service to address security or technical issues</li>
									</ul>
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
									<CardTitle>Termination</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground text-sm mb-3">
										Either party may terminate this agreement:
									</p>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs">
										<li>You may stop using the Service at any time</li>
										<li>We may terminate for violations of these Terms</li>
										<li>We may discontinue the Service with reasonable notice</li>
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					</div>

					{/* Disclaimers and Limitations */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Disclaimers and Limitations of Liability</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-3">Service "As Is"</h4>
									<p className="text-muted-foreground text-sm">
										The Service is provided on an "as is" and "as available" basis. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
									</p>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Limitation of Liability</h4>
									<p className="text-muted-foreground text-sm">
										To the maximum extent permitted by law, Dayflow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
									</p>
								</div>

								<div>
									<h4 className="font-semibold mb-3">Data Backup</h4>
									<p className="text-muted-foreground text-sm">
										While we implement backup systems, you are responsible for maintaining your own backups of important data. We recommend regularly exporting your task data.
									</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Changes to Terms */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Changes to These Terms</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									We reserve the right to modify or replace these Terms at any time. If a revision is material, we will:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
									<li>Provide at least 30 days notice before any new terms take effect</li>
									<li>Post the updated Terms on this page with a new "Last Updated" date</li>
									<li>Send email notification to registered users for significant changes</li>
									<li>Highlight key changes in our release notes</li>
								</ul>
								<p className="text-muted-foreground text-sm mt-4">
									Your continued use of the Service after any changes constitutes acceptance of the new Terms.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Governing Law */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.4, ease: 'easeOut' }}
						className="mb-8"
					>
						<Card>
							<CardHeader>
								<CardTitle>Governing Law and Jurisdiction</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm mb-4">
									These Terms shall be interpreted and governed by the laws of Canada, without regard to its conflict of law provisions.
								</p>
								<p className="text-muted-foreground text-sm">
									Any disputes arising from these Terms or the Service will be resolved through binding arbitration or in the courts of Canada, and you consent to the personal jurisdiction of such courts.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
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
									If you have any questions about these Terms of Service, please contact us:
								</p>
								<div className="space-y-2 text-muted-foreground">
									<p><strong>Email:</strong> legal@dayflow.ca</p>
									<p><strong>Website:</strong> https://dayflow.ca</p>
									<p><strong>Support:</strong> support@dayflow.ca</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Acknowledgment */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.6, ease: 'easeOut' }}
						className="text-center"
					>
						<Card>
							<CardContent className="pt-6">
								<p className="text-muted-foreground">
									By using Dayflow, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</main>
		</div>
	);
} 