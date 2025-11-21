import { useState } from 'react';
import { Screen } from '../App';
import { Home, MapPin, Key } from 'lucide-react';

interface ResidentVerificationScreenProps {
  onNavigate: (screen: Screen) => void;
  onUpdateData: (data: any) => void;
  darkMode: boolean;
}

const residenceHalls = {
  Marietta: [
    'Commons 100',
    'Commons 200',
    'Commons 300',
    'Commons 400',
    'Commons 500',
    'Commons 600',
    'Hornet Village',
    'Howell Hall',
    'Courtyard 1000',
    'Courtyard 2000',
    'Courtyard 3000',
  ],
  Kennesaw: [
    'University Village',
    'UV Suites',
    'KSU Place',
    'The Summit',
    'ARC',
  ],
};

export function ResidentVerificationScreen({ onNavigate, onUpdateData, darkMode }: ResidentVerificationScreenProps) {
  const [campus, setCampus] = useState<'Kennesaw' | 'Marietta' | ''>('');
  const [residenceHall, setResidenceHall] = useState('');
  const [hasReferralCode, setHasReferralCode] = useState<boolean | null>(null);
  const [referralCode, setReferralCode] = useState('');
  const [referralStatus, setReferralStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleCampusChange = (selectedCampus: 'Kennesaw' | 'Marietta') => {
    setCampus(selectedCampus);
    setResidenceHall(''); // Reset residence hall when campus changes
  };

  const validateReferralCode = (code: string) => {
    // Demo mode: only accept exactly "abc-123"
    if (code === 'abc-123') {
      setReferralStatus('success');
    } else {
      setReferralStatus('error');
    }
  };

  const handleReferralCodeChange = (code: string) => {
    setReferralCode(code);
    setReferralStatus('idle');
  };

  const handleReferralCodeBlur = () => {
    if (referralCode.trim()) {
      validateReferralCode(referralCode);
    }
  };

  const handleContinue = () => {
    if (campus && residenceHall) {
      onUpdateData({
        campus,
        residenceHall,
        referralCode: hasReferralCode && referralStatus === 'success' ? referralCode : null,
      });
      onNavigate('mood-preferences');
    }
  };

  const handleSkip = () => {
    onNavigate('mood-preferences');
  };

  const isFormValid = campus !== '' && residenceHall !== '' && 
    (hasReferralCode === false || hasReferralCode === null || (hasReferralCode === true && referralStatus === 'success'));

  return (
    <div className={`h-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50'} flex flex-col p-8 py-16`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${darkMode ? 'bg-gradient-to-br from-purple-500/40 to-blue-500/40' : 'bg-gradient-to-br from-purple-200 to-blue-200'} rounded-full mb-4 shadow-lg`}>
          <Home className="w-8 h-8 text-white" />
        </div>
        <h2 className={darkMode ? 'text-purple-300' : 'text-purple-600'}>Resident verification</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>Help us connect you with your campus community</p>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto space-y-6">
        {/* Question 1: Campus Selection */}
        <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6`}>
          <label className="flex items-center gap-3 mb-4">
            <MapPin className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Which campus do you live on?</span>
          </label>
          <select
            value={campus}
            onChange={(e) => handleCampusChange(e.target.value as 'Kennesaw' | 'Marietta')}
            className={`w-full px-6 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
          >
            <option value="">Select a campus</option>
            <option value="Kennesaw">Kennesaw</option>
            <option value="Marietta">Marietta</option>
          </select>
        </div>

        {/* Question 2: Residence Hall Selection */}
        {campus && (
          <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6`}>
            <label className="flex items-center gap-3 mb-4">
              <Home className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Which community do you live in?</span>
            </label>
            <select
              value={residenceHall}
              onChange={(e) => setResidenceHall(e.target.value)}
              className={`w-full px-6 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 focus:border-purple-300 focus:outline-none transition-colors`}
            >
              <option value="">Select a residence hall</option>
              {residenceHalls[campus].map((hall) => (
                <option key={hall} value={hall}>
                  {hall}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Question 3: Referral Code */}
        {campus && residenceHall && (
          <div className={`${darkMode ? 'bg-slate-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6`}>
            <label className="flex items-center gap-3 mb-4">
              <Key className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Do you have a referral code?</span>
            </label>
            
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => {
                  setHasReferralCode(true);
                  setReferralStatus('idle');
                }}
                className={`flex-1 px-6 py-3 rounded-2xl transition-all ${
                  hasReferralCode === true
                    ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80 text-white shadow-lg' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white shadow-lg')
                    : (darkMode ? 'bg-slate-700 text-gray-400 hover:bg-slate-600' : 'bg-white border-2 border-purple-100 text-gray-700 hover:bg-gray-50')
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setHasReferralCode(false);
                  setReferralCode('');
                  setReferralStatus('idle');
                }}
                className={`flex-1 px-6 py-3 rounded-2xl transition-all ${
                  hasReferralCode === false
                    ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80 text-white shadow-lg' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white shadow-lg')
                    : (darkMode ? 'bg-slate-700 text-gray-400 hover:bg-slate-600' : 'bg-white border-2 border-purple-100 text-gray-700 hover:bg-gray-50')
                }`}
              >
                No
              </button>
            </div>

            {hasReferralCode === true && (
              <div className="space-y-2">
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => handleReferralCodeChange(e.target.value)}
                  onBlur={handleReferralCodeBlur}
                  placeholder="Enter code"
                  className={`w-full px-6 py-3 ${darkMode ? 'bg-slate-700 text-gray-200 border-indigo-800' : 'bg-white border-purple-100'} rounded-2xl border-2 ${
                    referralStatus === 'error' 
                      ? 'border-red-400 focus:border-red-500' 
                      : referralStatus === 'success'
                      ? 'border-green-400 focus:border-green-500'
                      : 'focus:border-purple-300'
                  } focus:outline-none transition-colors`}
                />
                
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} px-2`}>
                  This one-time code connects you to your RA's community.
                </p>

                {referralStatus === 'error' && (
                  <div className={`${darkMode ? 'bg-red-900/40' : 'bg-red-100/60'} backdrop-blur-sm rounded-2xl p-3 border-2 ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
                    <p className={`text-sm ${darkMode ? 'text-red-300' : 'text-red-600'}`}>
                      Invalid or expired referral code. Please check with your RA.
                    </p>
                  </div>
                )}

                {referralStatus === 'success' && (
                  <div className={`${darkMode ? 'bg-green-900/40' : 'bg-green-100/60'} backdrop-blur-sm rounded-2xl p-3 border-2 ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                    <p className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                      ✓ Referral code accepted. Your RA will review your request.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="space-y-3 mt-6">
        <button
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`w-full py-4 ${
            isFormValid
              ? (darkMode ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300')
              : (darkMode ? 'bg-slate-700' : 'bg-gray-300')
          } text-white rounded-3xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Continue
        </button>
        
        <button
          onClick={handleSkip}
          className={`w-full py-4 ${darkMode ? 'bg-slate-800/60 text-gray-400' : 'bg-white/60 text-gray-600'} backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all`}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}