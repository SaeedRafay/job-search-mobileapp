import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: job.employer_logo
            ? job.employer_logo
            : 'https://static.vecteezy.com/system/resources/previews/000/642/323/non_2x/search-job-icon-vector.jpg',
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard