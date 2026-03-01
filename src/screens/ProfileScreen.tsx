import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Profile: undefined;
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

interface Usuario {
  nombre: string;
  apellido: string;
  cedula: string;
  correo: string;
  telefono: string;
}

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: 'Juan',
    apellido: 'Pérez',
    cedula: '12345678',
    correo: 'juan@ejemplo.com',
    telefono: '3001234567',
  });
  const [editMode, setEditMode] = useState(false);
  const [temp, setTemp] = useState<Usuario>(usuario);

  useEffect(() => {
    if (!editMode) {
      setTemp(usuario);
    }
  }, [editMode]);

  const handleSave = () => {
    // validar datos
    if (!temp.nombre || !temp.apellido || !temp.correo || !temp.telefono) {
      Alert.alert('Error', 'Los campos no pueden estar vacíos');
      return;
    }
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(temp.correo)) {
      Alert.alert('Error', 'Correo inválido');
      return;
    }
    setUsuario(temp);
    setEditMode(false);
    Alert.alert('Éxito', 'Datos actualizados');
  };

  const handleLogout = () => {
    navigation.replace('Login');
  };

  const handleDelete = () => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro de que desea eliminar su cuenta? Esta acción no se puede deshacer.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            // TODO: llamar API para borrar
            Alert.alert('Cuenta eliminada');
            navigation.replace('Login');
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      {editMode ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={temp.nombre}
            onChangeText={(t) => setTemp({ ...temp, nombre: t })}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={temp.apellido}
            onChangeText={(t) => setTemp({ ...temp, apellido: t })}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            value={temp.correo}
            onChangeText={(t) => setTemp({ ...temp, correo: t })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={temp.telefono}
            onChangeText={(t) => setTemp({ ...temp, telefono: t })}
            keyboardType="phone-pad"
          />
          <Button title="Guardar" onPress={handleSave} />
          <Button title="Cancelar" onPress={() => setEditMode(false)} />
        </>
      ) : (
        <>
          <Text style={styles.field}>Nombre: {usuario.nombre} {usuario.apellido}</Text>
          <Text style={styles.field}>Cédula: {usuario.cedula}</Text>
          <Text style={styles.field}>Correo: {usuario.correo}</Text>
          <Text style={styles.field}>Teléfono: {usuario.telefono}</Text>
          <Button title="Editar" onPress={() => setEditMode(true)} />
          <Button title="Cerrar sesión" onPress={handleLogout} />
          <Button title="Eliminar cuenta" color="red" onPress={handleDelete} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  field: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});
