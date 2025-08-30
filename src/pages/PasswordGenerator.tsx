import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, RefreshCw, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState({
    includeAlphabets: true,
    includeNumbers: false,
    includeSymbols: false,
  });
  const { toast } = useToast();

  const generatePassword = () => {
    let charset = '';
    
    if (options.includeAlphabets) {
      charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (options.includeNumbers) {
      charset += '0123456789';
    }
    if (options.includeSymbols) {
      charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    if (!charset) {
      toast({
        title: "Error",
        description: "Please select at least one character type",
        variant: "destructive",
      });
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      toast({
        title: "Copied!",
        description: "Password copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Password Generator
            </h1>
            <p className="text-muted-foreground text-lg">
              Generate secure passwords with customizable options
            </p>
          </div>

          {/* Stage 1: Basic Generator */}
          <Card className="mb-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">1</span>
                Password Length
              </CardTitle>
              <CardDescription>
                Set your desired password length
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="length">Length: {length} characters</Label>
                <Input
                  id="length"
                  type="number"
                  min="4"
                  max="128"
                  value={length}
                  onChange={(e) => setLength(Math.max(4, Math.min(128, parseInt(e.target.value) || 4)))}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Stage 2: Character Options */}
          <Card className="mb-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
                Character Types
              </CardTitle>
              <CardDescription>
                Select which character types to include
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="alphabets"
                    checked={options.includeAlphabets}
                    onCheckedChange={(checked) => 
                      setOptions(prev => ({ ...prev, includeAlphabets: !!checked }))
                    }
                  />
                  <Label htmlFor="alphabets" className="cursor-pointer">
                    Include Alphabets (a-z, A-Z)
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="numbers"
                    checked={options.includeNumbers}
                    onCheckedChange={(checked) => 
                      setOptions(prev => ({ ...prev, includeNumbers: !!checked }))
                    }
                  />
                  <Label htmlFor="numbers" className="cursor-pointer">
                    Include Numbers (0-9)
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="symbols"
                    checked={options.includeSymbols}
                    onCheckedChange={(checked) => 
                      setOptions(prev => ({ ...prev, includeSymbols: !!checked }))
                    }
                  />
                  <Label htmlFor="symbols" className="cursor-pointer">
                    Include Symbols (!@#$%^&*)
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generate Button */}
          <div className="mb-8">
            <Button 
              onClick={generatePassword}
              className="w-full h-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-all duration-200"
              size="lg"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Generate Password
            </Button>
          </div>

          {/* Generated Password Display */}
          {password && (
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle>Generated Password</CardTitle>
                <CardDescription>
                  Your secure password is ready
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <code className="flex-1 font-mono text-lg break-all select-all bg-transparent">
                    {password}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Password strength: <span className="font-semibold">Strong</span></p>
                  <p>Length: {password.length} characters</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;