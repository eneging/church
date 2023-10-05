import '../App.css';
import { Document, Page, View, Text, StyleSheet, } from "@react-pdf/renderer";

function HojasPdf({
  titulo,
  Barrio,
  comiteBienvenida,
  comiteLimpieza,
  comiteRefrigerio,
  comiteSeguridad,
  lider1,
  lider2,
  lider3,
  lider4,
  meta1,
  meta2,
  meta3,
  meta4,
  organizacion,
  Fecha,
  descripcion,
  hora
}) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
       // Fondo azul oscuro
    },
    Titulos: {
      margin: 3,
      padding: 3,
      textAlign: "center",
      textDecoration: "underline",
      fontSize: "25px",
      // Texto en color blanco
    },
    Titulo: {
      margin: 3,
      padding: 3,
      fontSize: "20px",
      fontWeight: "300"
     
    },
    Titulos1: {
      color: "red"
    }
  });




  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.Titulos}>Cronograma Actividades</Text>
          <View className='Cronograma'>
            <View>
              <Text style={styles.Titulo}>{titulo}</Text>
            </View>
            <View>
              <View>
                <Text style={styles.Titulos1}>Organizado:</Text>
                <Text className='respuestas'>{organizacion}</Text>
              </View>
              <Text>
                <View>
                  <Text style={styles.Titulos1}>lideres Asignados:</Text>
                  <Text className='respuestas'>
                    <Text>
                      <Text>{lider1}</Text>
                      <Text>{lider2}</Text>
                      <Text>{lider3}</Text>
                      <Text>{lider4}</Text>
                    </Text>
                  </Text>
                </View>
              </Text>
            </View>
            <View>
              <View>
                <Text style={styles.Titulos1}>Descripcion:</Text>
                <Text className='respuestas'>{descripcion}</Text>
              </View>
            </View>
            <View>
              <View className='container-2bloque'>
                <View>
                  <View>
                    <Text style={styles.Titulos1}>Hora</Text>
                    <Text className='respuestas'>{hora}</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.Titulos1}>Fecha</Text>
                    <Text className='respuestas'>{Fecha}</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.Titulos1}>Barrio</Text>
                    <Text className='respuestas'>{Barrio}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='ctn-3-comites'>
              <View>
                <Text style={styles.Titulos1}> Comite de Bienvenida</Text>
                <Text className='respuestas'> {comiteBienvenida}</Text>
              </View>
              <View>
                <Text style={styles.Titulos1}> Comite de Seguridad</Text>
                <Text className='respuestas'> {comiteSeguridad}</Text>
              </View>
              <View>
                <View>
                  <Text style={styles.Titulos1}> Comite de Limpieza</Text>
                  <Text className='respuestas'> {comiteLimpieza}</Text>
                </View>
                <View>
                  <Text style={styles.Titulos1}> Comite de Refrigerio</Text>
                  <Text className='respuestas'> {comiteRefrigerio}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.Titulos1}>Metas:
                  <Text>
                    <Text>{meta1}</Text>
                    <Text>{meta2}</Text>
                    <Text>{meta3}</Text>
                    <Text>{meta4}</Text>
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default HojasPdf;
