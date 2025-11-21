import { useState } from 'react';
import { SignUpScreen } from './components/SignUpScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SchoolSelectionScreen } from './components/SchoolSelectionScreen';
import { ResidentVerificationScreen } from './components/ResidentVerificationScreen';
import { MoodLoggingPreferencesScreen } from './components/MoodLoggingPreferencesScreen';
import { GoalsScreen } from './components/GoalsScreen';
import { PrivacyDataControlScreen } from './components/PrivacyDataControlScreen';
import { ClassScheduleSetupScreen } from './components/ClassScheduleSetupScreen';
import { HomeScreen } from './components/HomeScreen';
import { EmotionWheelScreen } from './components/EmotionWheelScreen';
import { AIAssistantChatScreen } from './components/AIAssistantChatScreen';
import { InsightsScreen } from './components/InsightsScreen';
import { ResourcesScreen } from './components/ResourcesScreen';
import { CampusResourcesMapScreen } from './components/CampusResourcesMapScreen';
import { UnwindScreen } from './components/UnwindScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { BreathingActivityScreen } from './components/BreathingActivityScreen';
import { SoothingColorsScreen } from './components/SoothingColorsScreen';
import { StudyBuddiesScreen } from './components/StudyBuddiesScreen';
import { FocusSortScreen } from './components/FocusSortScreen';
import { MindfulTapsScreen } from './components/MindfulTapsScreen';
import { GroupChatScreen } from './components/GroupChatScreen';
import { RequestGroupScreen } from './components/RequestGroupScreen';

export type Screen = 
  | 'signup'
  | 'welcome'
  | 'school-selection'
  | 'resident-verification'
  | 'mood-preferences'
  | 'goals'
  | 'privacy'
  | 'class-schedule-setup'
  | 'home'
  | 'emotion-wheel'
  | 'ai-chat'
  | 'insights'
  | 'resources'
  | 'campus-map'
  | 'unwind'
  | 'profile'
  | 'breathing-activity'
  | 'soothing-colors'
  | 'study-buddies'
  | 'focus-sort'
  | 'mindful-taps'
  | 'group-chat'
  | 'request-group';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('signup');
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    school: string;
    goals: string[];
    loggingFrequency: string;
    reminderTime: string;
    gentleReminders: boolean;
    aiInsights: boolean;
    anonymizedAnalysis: boolean;
    classSchedule?: Array<{
      id: string;
      name: string;
      days: string[];
      startTime: string;
      endTime: string;
    }>;
  }>({
    name: '',
    email: '',
    school: '',
    goals: [] as string[],
    loggingFrequency: 'Once a day',
    reminderTime: '20:00',
    gentleReminders: true,
    aiInsights: true,
    anonymizedAnalysis: true,
  });

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'} flex items-center justify-center p-4`}>
      <div className={`w-full max-w-md h-[812px] ${darkMode ? 'bg-slate-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-[40px] shadow-2xl overflow-hidden relative`}>
        {currentScreen === 'signup' && (
          <SignUpScreen onNavigate={navigateToScreen} onUpdateData={updateUserData} darkMode={darkMode} />
        )}
        {currentScreen === 'welcome' && (
          <WelcomeScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'school-selection' && (
          <SchoolSelectionScreen 
            onNavigate={navigateToScreen} 
            onUpdateData={updateUserData}
            userName={userData.name}
            darkMode={darkMode}
          />
        )}
        {currentScreen === 'resident-verification' && (
          <ResidentVerificationScreen 
            onNavigate={navigateToScreen} 
            onUpdateData={updateUserData}
            darkMode={darkMode}
          />
        )}
        {currentScreen === 'mood-preferences' && (
          <MoodLoggingPreferencesScreen 
            onNavigate={navigateToScreen} 
            onUpdateData={updateUserData}
            darkMode={darkMode}
          />
        )}
        {currentScreen === 'goals' && (
          <GoalsScreen onNavigate={navigateToScreen} onUpdateData={updateUserData} darkMode={darkMode} />
        )}
        {currentScreen === 'privacy' && (
          <PrivacyDataControlScreen 
            onNavigate={navigateToScreen} 
            onUpdateData={updateUserData}
            darkMode={darkMode}
          />
        )}
        {currentScreen === 'class-schedule-setup' && (
          <ClassScheduleSetupScreen 
            onNavigate={navigateToScreen} 
            onUpdateData={updateUserData}
            darkMode={darkMode}
          />
        )}
        {currentScreen === 'home' && (
          <HomeScreen 
            onNavigate={navigateToScreen} 
            userName={userData.name}
            darkMode={darkMode}
          />
        )}
        {currentScreen === 'emotion-wheel' && (
          <EmotionWheelScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'ai-chat' && (
          <AIAssistantChatScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'insights' && (
          <InsightsScreen 
            onNavigate={navigateToScreen} 
            darkMode={darkMode} 
            classSchedule={userData.classSchedule}
          />
        )}
        {currentScreen === 'resources' && (
          <ResourcesScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'campus-map' && (
          <CampusResourcesMapScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'unwind' && (
          <UnwindScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'profile' && (
          <ProfileScreen 
            onNavigate={navigateToScreen} 
            userData={userData}
            onUpdateData={updateUserData}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        )}
        {currentScreen === 'breathing-activity' && (
          <BreathingActivityScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'soothing-colors' && (
          <SoothingColorsScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'study-buddies' && (
          <StudyBuddiesScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'focus-sort' && (
          <FocusSortScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'mindful-taps' && (
          <MindfulTapsScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'group-chat' && (
          <GroupChatScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
        {currentScreen === 'request-group' && (
          <RequestGroupScreen onNavigate={navigateToScreen} darkMode={darkMode} />
        )}
      </div>
    </div>
  );
}