import COLORS from "@/app/constants/theme";
import { styles } from '@/styles/auth.styles';
import { useSSO } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Login() {
    const { startSSOFlow } = useSSO();
    const router = useRouter();

    const handleGoogleSignin = async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy: 'oauth_google' });
            if (setActive && createdSessionId) {
                setActive({ session: createdSessionId });
                router.replace('/(tabs)');
            }
        } catch (error) {
            console.error("OAuth error:", error);
        }
    };

    return (
        <View style={styles.container}>

            {/* BRAND */}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name='leaf' size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>Moonlight</Text>
                <Text style={styles.tagline}>Don't Miss Anything</Text>
            </View>

            {/* ILLUSTRATION */}
            <View style={styles.illustrationContainer}>
                <Image
                    source={require('../../assets/images/moonlight.png')}
                    style={styles.illustration}
                    resizeMode='contain'
                />
            </View>

            {/* LOGIN */}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleSignin}
                    activeOpacity={0.9}
                >
                    <View style={styles.googleIconContainer}>
                        <Ionicons name='logo-google' size={28} color={COLORS.surface} />
                    </View>
                    <Text style={styles.googleButtonText}>Continue With Google</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>By continuing, You Agree To Our Terms And Privacy Policy</Text>
            </View>
        </View>
    );
}